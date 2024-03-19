# GraphQL API for Pet Owners

This GraphQL API allows managing pet owners and their pets.

## Schema

- `Owner`: Represents an owner of pets.
- `Pet`: Represents a pet owned by an owner.

## Queries

- `owners`: Retrieve a list of al`l owners.
- `owner(id: ID!)`: Retrieve a specific owner by ID.
- `pets(ownerId: ID!)`: Retrieve all pets belonging to a specific owner.
- `pets`: Retrieve all pets .
- `pets(id: ID!)`: Retrieve Specific Pet.
- `owner(id: ID!)`: Retrieve Pets Owner(Resolver)

## Mutations

- `createOwner(input: OwnerInput!)`: Create a new owner.
- `createPet(input: PetInput!)`: Add a new pet for an existing owner.
