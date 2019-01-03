import {PackageUpdateStatus} from "./packages-update-status";

describe('Enum: PackageUpdateStatus', () => {
  let service;

  beforeAll(() => {
    service = new PackageUpdateStatus();
  });

  it('should contain text for selected package update',() => {
    expect(service.SELECTED_PACKAGE_UPDATED).toBeDefined();
    expect(service.SELECTED_PACKAGE_UPDATED).toEqual(jasmine.any(String));
  });

  it('should contain text for selected destination group updated',() => {
    expect(service.SELECTED_DESTINATION_GROUP_UPDATED).toBeDefined();
    expect(service.SELECTED_DESTINATION_GROUP_UPDATED).toEqual(jasmine.any(String));
  });

  it('should contain text for selected offering updated',() => {
    expect(service.SELECTED_OFFERING_GROUP_UPDATED).toBeDefined();
    expect(service.SELECTED_OFFERING_GROUP_UPDATED).toEqual(jasmine.any(String));
  });

  it('should contain text for destination groups sorted',() => {
    expect(service.DESTINATION_GROUPS_SORTED).toBeDefined();
    expect(service.DESTINATION_GROUPS_SORTED).toEqual(jasmine.any(String));
  });

});
